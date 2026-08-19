const sharp = require('sharp');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Target dimensions: 1920 x 120 (16:1 ratio, stadium ribbon LED format)
const WIDTH = 1920;
const HEIGHT = 120;
const FPS = 30;
const DURATION = 15; // 15 seconds
const TOTAL_FRAMES = FPS * DURATION;

const OUTPUT_PATH = path.join(__dirname, '../public/videos/8240-003423_BMW_RedDevils_STADIUM_LED.mp4');
const BACKUP_PATH = path.join(__dirname, '../public/videos/stadium_led.mp4');

// SVG BMW Logo generator
function getBmwLogoSvg(cx, cy, r, opacity = 1) {
  return `
    <g transform="translate(${cx}, ${cy})" opacity="${opacity}">
      <!-- Outer circle -->
      <circle cx="0" cy="0" r="${r}" fill="none" stroke="#FFFFFF" stroke-width="${r * 0.08}" />
      <!-- Inner ring -->
      <circle cx="0" cy="0" r="${r * 0.68}" fill="#002C5A" stroke="#FFFFFF" stroke-width="${r * 0.06}" />
      <!-- Quadrants -->
      <path d="M 0 0 L 0 ${-r * 0.65} A ${r * 0.65} ${r * 0.65} 0 0 1 ${r * 0.65} 0 Z" fill="#FFFFFF" />
      <path d="M 0 0 L ${r * 0.65} 0 A ${r * 0.65} ${r * 0.65} 0 0 1 0 ${r * 0.65} Z" fill="#0066B1" />
      <path d="M 0 0 L 0 ${r * 0.65} A ${r * 0.65} ${r * 0.65} 0 0 1 ${-r * 0.65} 0 Z" fill="#FFFFFF" />
      <path d="M 0 0 L ${-r * 0.65} 0 A ${r * 0.65} ${r * 0.65} 0 0 1 0 ${-r * 0.65} Z" fill="#0066B1" />
      <!-- Letters B M W -->
      <text x="${-r * 0.35}" y="${-r * 0.72}" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="${r * 0.22}" fill="#FFFFFF" text-anchor="middle" transform="rotate(-38, ${-r * 0.35}, ${-r * 0.72})">B</text>
      <text x="0" y="${-r * 0.76}" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="${r * 0.22}" fill="#FFFFFF" text-anchor="middle">M</text>
      <text x="${r * 0.35}" y="${-r * 0.72}" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="${r * 0.22}" fill="#FFFFFF" text-anchor="middle" transform="rotate(38, ${r * 0.35}, ${-r * 0.72})">W</text>
    </g>
  `;
}

function generateFrameSvg(frameIndex) {
  const t = frameIndex / FPS; // Time in seconds (0 to 15)
  const bg = '#002855';
  let elementsSvg = '';

  const logoRadius = 42;
  const centerY = HEIGHT / 2;

  if (t < 3.5) {
    // Phase 1: 13 repeating logos sliding smoothly
    const offset = (t * 40) % (WIDTH / 13);
    const numLogos = 14;
    const spacing = WIDTH / 13;
    for (let i = -1; i <= numLogos; i++) {
      const x = i * spacing + spacing / 2 - offset;
      elementsSvg += getBmwLogoSvg(x, centerY, logoRadius, 1);
    }
  } else if (t < 4.5) {
    // Phase 1 -> 2 Transition: Logos glide out / drop down
    const p = (t - 3.5) / 1.0; // 0 to 1
    const spacing = WIDTH / 13;
    for (let i = 0; i < 13; i++) {
      const x = i * spacing + spacing / 2 - (i % 2 === 0 ? p * 150 : -p * 150);
      const y = centerY + p * 140;
      elementsSvg += getBmwLogoSvg(x, y, logoRadius, Math.max(0, 1 - p));
    }
    // Fade in typography
    const textOpacity = Math.min(1, Math.max(0, (p - 0.3) / 0.7));
    elementsSvg += `
      <g opacity="${textOpacity}">
        ${getBmwLogoSvg(80, centerY, logoRadius, 1)}
        <text x="${WIDTH / 2}" y="${centerY + 16}" font-family="Arial, Helvetica, 'Segoe UI', sans-serif" font-weight="900" font-size="48" fill="#FFFFFF" letter-spacing="6" text-anchor="middle">SHEER DRIVING PLEASURE</text>
        ${getBmwLogoSvg(WIDTH - 80, centerY, logoRadius, 1)}
      </g>
    `;
  } else if (t < 7.5) {
    // Phase 2: Centered large text with side badges
    elementsSvg += `
      <g>
        ${getBmwLogoSvg(80, centerY, logoRadius, 1)}
        <text x="${WIDTH / 2}" y="${centerY + 16}" font-family="Arial, Helvetica, 'Segoe UI', sans-serif" font-weight="900" font-size="48" fill="#FFFFFF" letter-spacing="6" text-anchor="middle">SHEER DRIVING PLEASURE</text>
        ${getBmwLogoSvg(WIDTH - 80, centerY, logoRadius, 1)}
      </g>
    `;
  } else if (t < 8.8) {
    // Phase 2 -> 3 Transition: Text glides up, logos return
    const p = (t - 7.5) / 1.3;
    elementsSvg += `
      <g opacity="${Math.max(0, 1 - p)}">
        ${getBmwLogoSvg(80, centerY - p * 80, logoRadius, 1)}
        <text x="${WIDTH / 2}" y="${centerY + 16 - p * 100}" font-family="Arial, Helvetica, 'Segoe UI', sans-serif" font-weight="900" font-size="48" fill="#FFFFFF" letter-spacing="6" text-anchor="middle">SHEER DRIVING PLEASURE</text>
        ${getBmwLogoSvg(WIDTH - 80, centerY - p * 80, logoRadius, 1)}
      </g>
    `;
    const spacing = WIDTH / 13;
    for (let i = 0; i < 13; i++) {
      const x = i * spacing + spacing / 2;
      const y = centerY + (1 - p) * 120;
      elementsSvg += getBmwLogoSvg(x, y, logoRadius, Math.min(1, p));
    }
  } else if (t < 10.5) {
    // Phase 3: Gliding ribbon with kinetic wave
    const offset = ((t - 8.8) * 60) % (WIDTH / 13);
    const spacing = WIDTH / 13;
    for (let i = -1; i <= 14; i++) {
      const x = i * spacing + spacing / 2 - offset;
      const wave = Math.sin((x / WIDTH) * Math.PI * 4 + t * 4) * 4;
      elementsSvg += getBmwLogoSvg(x, centerY + wave, logoRadius, 1);
    }
  } else if (t < 13.8) {
    // Phase 4: Dual repetition: [Logo] SHEER DRIVING PLEASURE [Logo] SHEER DRIVING PLEASURE [Logo]
    const p = Math.min(1, (t - 10.5) / 0.8);
    elementsSvg += `
      <g opacity="${p}">
        ${getBmwLogoSvg(70, centerY, logoRadius * 0.9, 1)}
        <text x="${WIDTH * 0.28}" y="${centerY + 14}" font-family="Arial, Helvetica, 'Segoe UI', sans-serif" font-weight="900" font-size="34" fill="#FFFFFF" letter-spacing="4" text-anchor="middle">SHEER DRIVING PLEASURE</text>
        ${getBmwLogoSvg(WIDTH / 2, centerY, logoRadius * 0.9, 1)}
        <text x="${WIDTH * 0.72}" y="${centerY + 14}" font-family="Arial, Helvetica, 'Segoe UI', sans-serif" font-weight="900" font-size="34" fill="#FFFFFF" letter-spacing="4" text-anchor="middle">SHEER DRIVING PLEASURE</text>
        ${getBmwLogoSvg(WIDTH - 70, centerY, logoRadius * 0.9, 1)}
      </g>
    `;
  } else {
    // Phase 4 -> 1 Transition: Seamless loop back to initial frame
    const p = (t - 13.8) / 1.2;
    elementsSvg += `
      <g opacity="${Math.max(0, 1 - p)}">
        ${getBmwLogoSvg(70, centerY, logoRadius * 0.9, 1)}
        <text x="${WIDTH * 0.28}" y="${centerY + 14}" font-family="Arial, Helvetica, 'Segoe UI', sans-serif" font-weight="900" font-size="34" fill="#FFFFFF" letter-spacing="4" text-anchor="middle">SHEER DRIVING PLEASURE</text>
        ${getBmwLogoSvg(WIDTH / 2, centerY, logoRadius * 0.9, 1)}
        <text x="${WIDTH * 0.72}" y="${centerY + 14}" font-family="Arial, Helvetica, 'Segoe UI', sans-serif" font-weight="900" font-size="34" fill="#FFFFFF" letter-spacing="4" text-anchor="middle">SHEER DRIVING PLEASURE</text>
        ${getBmwLogoSvg(WIDTH - 70, centerY, logoRadius * 0.9, 1)}
      </g>
    `;
    const spacing = WIDTH / 13;
    for (let i = 0; i < 13; i++) {
      const x = i * spacing + spacing / 2;
      elementsSvg += getBmwLogoSvg(x, centerY, logoRadius, Math.min(1, p));
    }
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
      <rect width="${WIDTH}" height="${HEIGHT}" fill="${bg}" />
      ${elementsSvg}
    </svg>
  `;
}

async function renderVideo() {
  console.log(`Starting stadium video render: ${WIDTH}x${HEIGHT}, ${FPS} fps, ${TOTAL_FRAMES} frames...`);

  // Spawn ffmpeg with piped PNG/RGBA input
  const ffmpeg = spawn('ffmpeg', [
    '-y',
    '-f', 'image2pipe',
    '-vcodec', 'png',
    '-r', `${FPS}`,
    '-i', '-',
    '-c:v', 'libx264',
    '-pix_fmt', 'yuv420p',
    '-preset', 'fast',
    '-crf', '18',
    '-movflags', '+faststart',
    OUTPUT_PATH
  ]);

  ffmpeg.stderr.on('data', (d) => {
    // console.log(d.toString());
  });

  for (let i = 0; i < TOTAL_FRAMES; i++) {
    const svg = generateFrameSvg(i);
    const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();
    ffmpeg.stdin.write(pngBuffer);
    if (i % 60 === 0) {
      console.log(`Rendered frame ${i}/${TOTAL_FRAMES} (${((i/TOTAL_FRAMES)*100).toFixed(0)}%)`);
    }
  }

  ffmpeg.stdin.end();

  await new Promise((resolve, reject) => {
    ffmpeg.on('close', (code) => {
      if (code === 0) {
        console.log('Video render completed successfully!');
        fs.copyFileSync(OUTPUT_PATH, BACKUP_PATH);
        // Also copy to public/images for fallback resolution
        fs.copyFileSync(OUTPUT_PATH, path.join(__dirname, '../public/images/8240-003423_BMW_RedDevils_STADIUM_LED.mp4'));
        resolve();
      } else {
        reject(new Error(`ffmpeg exited with code ${code}`));
      }
    });
  });
}

renderVideo().catch(err => {
  console.error('Error rendering video:', err);
  process.exit(1);
});
