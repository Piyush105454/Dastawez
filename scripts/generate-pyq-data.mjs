import fs from 'fs/promises';
import path from 'path';
import pdf from 'pdf-poppler';

const pyqDir = path.resolve(process.cwd(), 'pyq');
const outputDir = path.resolve(process.cwd(), 'public', 'pyq-data');
const outputFile = path.resolve(outputDir, 'pyqs.json');

async function createThumbnail(pdfPath, outputName) {
  const outputPath = path.resolve(outputDir, 'thumbnails');
  await fs.mkdir(outputPath, { recursive: true });

  const opts = {
    format: 'jpeg',
    out_dir: outputPath,
    out_prefix: outputName,
    page: 1,
  };

  await pdf.convert(pdfPath, opts);
  return `pyq-data/thumbnails/${outputName}.jpg`;
}

async function getPYQs() {
  const pyqs = [];
  const branches = await fs.readdir(pyqDir);

  for (const branch of branches) {
    const branchPath = path.join(pyqDir, branch);
    const years = await fs.readdir(branchPath);

    for (const year of years) {
      const yearPath = path.join(branchPath, year);
      const types = await fs.readdir(yearPath);

      for (const type of types) {
        const typePath = path.join(yearPath, type);
        const files = await fs.readdir(typePath);

        for (const file of files) {
          const filePath = path.join(typePath, file);
          const ext = path.extname(file);
          const semester = 'Unknown'; // Or parse from file name if possible

          let thumbnailPath = `/${path.relative(process.cwd(), filePath)}`;

          if (ext === '.pdf') {
            const outputName = path.basename(file, '.pdf');
            thumbnailPath = await createThumbnail(filePath, outputName);
          }

          pyqs.push({
            path: `/${path.relative(process.cwd(), filePath)}`,
            thumbnail: thumbnailPath,
            branch,
            year,
            type,
            semester,
          });
        }
      }
    }
  }

  return pyqs;
}

async function main() {
  try {
    await fs.mkdir(outputDir, { recursive: true });
    const pyqs = await getPYQs();
    await fs.writeFile(outputFile, JSON.stringify(pyqs, null, 2));
    console.log('PYQ data generated successfully!');
  } catch (error) {
    console.error('Error generating PYQ data:', error);
  }
}

main();
