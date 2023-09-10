export class HSL {
  h: number;
  s: number;
  l: number;

  cssValue: string;

  constructor(h: number, s: number, l: number) {
    this.h = h;
    this.s = s;
    this.l = l;

    this.cssValue = this.toString();
  }

  toRGB(): RGB {
    const s = this.s / 100;
    const l = this.l / 100;

    const k = (n: number) => (n + this.h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

    return new RGB(255 * f(0), 255 * f(8), 255 * f(4));
  }

  toString(): string {
    return `hsl(${this.h}, ${this.s}%, ${this.l}%)`;
  }
}

export class RGB {
  r: number;
  g: number;
  b: number;

  constructor(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  toHSL(): HSL {
    const r = this.r / 255;
    const g = this.g / 255;
    const b = this.b / 255;

    const l = Math.max(r, g, b);
    const s = l - Math.min(r, g, b);
    const h = s
      ? l === r
        ? (g - b) / s
        : l === g
        ? 2 + (b - r) / s
        : 4 + (r - g) / s
      : 0;

    return new HSL(
      60 * h < 0 ? 60 * h + 360 : 60 * h,
      100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
      (100 * (2 * l - s)) / 2,
    );
  }

  toString(): string {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}
