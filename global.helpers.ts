
static getContrastColorValue($color): number {
    if ($color) {
      let c = $color.substring(1); // strip #
      // cases like '#BBB'
      if (c.length === 3) {
        c = c.charAt(0) + c.charAt(0) + c.charAt(1) + c.charAt(1) + c.charAt(2) + c.charAt(2);
      }
      const rgb = parseInt(c, 16);   // convert rrggbb(hex) to decimal
      const r = (rgb >> 16) & 0xff;  // extract red
      const g = (rgb >> 8) & 0xff;   // extract green
      const b = (rgb >> 0) & 0xff;   // extract blue
      // Bright colors return black. Dark colors return white.
      return 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    }
    return 0;
  }
