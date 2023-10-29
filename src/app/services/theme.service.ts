import { EventEmitter, Injectable, Output } from "@angular/core";
import { Theme, ThemeColors } from "../types/theme/theme";
import { HSL, RGB } from "../types/theme/colors";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  @Output() themeChangedEvent = new EventEmitter<Theme>();

  activeThemeName: string = "";
  colors: ThemeColors | null = null;

  //Equivalent to 120 refreshes per second
  //TODO: Check that this won't cause performance issues
  readonly TRANSITION_TIME: number = 300;
  readonly TRANSITION_INTERVAL: number = 3.6;

  //TODO: Move to separate file
  readonly themes: Theme[] = [
    {
      name: "light",
      colors: {
        primary: new HSL(0, 0, 25),
        secondary: new HSL(0, 0, 25),

        tertiary: new HSL(0, 0, 25),

        gradientLight: new HSL(211, 78, 49),
        gradientDark: new HSL(256, 100, 16),

        background: new HSL(0, 0, 100),
      },
    },
    {
      name: "dark",
      colors: {
        primary: new HSL(0, 0, 80),
        secondary: new HSL(0, 0, 25),

        tertiary: new HSL(0, 0, 25),

        gradientLight: new HSL(211, 78, 49),
        gradientDark: new HSL(256, 100, 16),

        background: new HSL(0, 0, 15),
      },
    },
  ];

  constructor() {
    this.setTheme("light");
  }

  setTheme(themeName: string, lerp: boolean = false): void {
    //TODO: Add system theme handling
    if (themeName === "system") return;

    const currentTheme: Theme =
      this.themes.find((theme) => theme.name === this.activeThemeName) ??
      this.themes[0];

    const nextTheme: Theme =
      this.themes.find((theme) => theme.name === themeName) ?? this.themes[0];

    if (lerp) {
      this.lerpTheme(currentTheme, nextTheme);
    } else {
      this.activeThemeName = nextTheme.name;
      this.colors = { ...nextTheme.colors };
    }
  }

  getGradientString(direction: string) {
    return `linear-gradient(to ${direction}, 
    ${this.colors!.gradientLight.cssValue}, 
    ${this.colors!.gradientDark.cssValue})`;
  }

  private lerpTheme(start: Theme, end: Theme) {
    const startHSLArray = Object.values(start.colors) as HSL[];
    const endHSLArray = Object.values(end.colors) as HSL[];

    let startRGBArray: RGB[] = [];
    let endRGBArray: RGB[] = [];

    startHSLArray.forEach((element) => {
      startRGBArray.push(element.toRGB());
    });

    endHSLArray.forEach((element) => {
      endRGBArray.push(element.toRGB());
    });

    let time = 0;
    let scaledTime = 0;

    let interval = setInterval(() => {
      time += this.TRANSITION_INTERVAL;
      scaledTime = time / this.TRANSITION_TIME;

      if (time >= this.TRANSITION_TIME) {
        clearInterval(interval);

        this.activeThemeName = end.name;
        this.colors = { ...end.colors };

        return;
      }

      let lerpedHSLValues: HSL[] = [];

      for (let i = 0; i < startRGBArray.length; i++) {
        const lerpedRGB = this.lerpRGB(
          startRGBArray[i],
          endRGBArray[i],
          scaledTime,
        );

        lerpedHSLValues.push(lerpedRGB.toHSL());
      }

      this.colors = {
        primary: lerpedHSLValues[0],
        secondary: lerpedHSLValues[1],

        tertiary: lerpedHSLValues[2],

        gradientLight: end.colors!.gradientLight,
        gradientDark: end.colors!.gradientDark,

        background: lerpedHSLValues[5],
      };
    }, this.TRANSITION_INTERVAL);
  }

  private lerpRGB(color1: RGB, color2: RGB, t: number): RGB {
    let color: RGB = new RGB(0, 0, 0);

    color.r = color1.r + (color2.r - color1.r) * t;
    color.g = color1.g + (color2.g - color1.g) * t;
    color.b = color1.b + (color2.b - color1.b) * t;

    return color;
  }
}
