# Hero Background Video (Optional)

Add your hero background video here for an even more cinematic effect!

## Recommended Specifications:
- **Formats**: MP4 (h.264) and WebM for cross-browser compatibility
- **Resolution**: 1920x1080 (Full HD)
- **Duration**: 10-30 seconds (looping)
- **File Size**: Under 5MB (heavily compressed for web)
- **Frame Rate**: 24-30 fps
- **Style**: Slow motion, subtle movement, no audio needed

## Video Files Needed:
1. `hero-background.mp4` - Main video file (H.264 codec)
2. `hero-background.webm` - WebM version for Firefox/Chrome (optional but recommended)

## Tips for Best Results:
- Use slow, smooth camera movements
- Avoid quick cuts or jarring motion
- Keep it subtle - the video is a background element
- Compress heavily for web performance
- Test on mobile - video is hidden on small screens for performance

## Video Ideas for Audiovisual Portfolio:
- Smooth camera slider shot of editing workspace
- Color grading software interface (blurred/abstract)
- Film equipment close-up with subtle movement
- Abstract light leaks or bokeh
- Time-lapse of editing timeline

## How to Convert/Compress:
Use FFmpeg or online tools like:
- HandBrake (free, easy to use)
- CloudConvert (online converter)
- FFmpeg command:
  ```bash
  # Convert to optimized MP4
  ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -vf scale=1920:1080 -an hero-background.mp4
  
  # Convert to WebM
  ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 35 -b:v 0 -vf scale=1920:1080 -an hero-background.webm
  ```

## How to Add:
1. Create/obtain your hero video
2. Compress it for web
3. Save as `hero-background.mp4` and `hero-background.webm`
4. Place files in this folder: `assets/videos/`
5. The website will automatically use the video!

**Note**: If video files are not found, the website falls back to the hero image. On mobile devices, only the image is shown for better performance.

**Current**: Using image fallback until you add video files.
