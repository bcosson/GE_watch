class Watch {
  private hours: number;
  private minutes: number;
  private mode_clicked_once: boolean;
  private mode_clicked_twice: boolean;
  private night_mode: boolean;

  constructor() {
    const real_time = new Date();
    this.hours = real_time.getHours();
    this.minutes = real_time.getMinutes();
    this.mode_clicked_once = false;
    this.mode_clicked_twice = false;
    this.night_mode = false;
  }

  get_time(): string {
    return this.get_hours() + ":" + this.get_minutes();
  }

  get_hours(): string {
    if (this.hours < 10) {
      return "0" + this.hours.toString();
    }
    return this.hours.toString();
  }
  get_minutes(): string {
    if (this.minutes < 10) {
      return "0" + this.minutes.toString();
    } else {
      return this.minutes.toString();
    }
  }

  get_night_mode(): boolean {
    return this.night_mode;
  }

  on_mode_click(): void {
    if (this.mode_clicked_once == true) {
      if (this.mode_clicked_twice == true) {
        // 3e clic sur mode
        this.mode_clicked_once = false;
        this.mode_clicked_twice = false;
        console.log(">>Exiting edit mode...");
      } else {
        // 2e clic sur mode
        this.mode_clicked_twice = true;
        console.log(">>You can now edit minutes...");
      }
    } else {
      // 1er clic sur mode
      this.mode_clicked_once = true;
      console.log(">>You can now edit hours...");
    }
  }
  on_light_click(): void {
    this.night_mode = !this.night_mode;
  }

  increment_time(): void {
    if (this.mode_clicked_once && this.mode_clicked_twice) {
      this.increment_hours();
    } else if (this.mode_clicked_once && this.mode_clicked_twice == false) {
      this.increment_minutes();
    } else {
      console.log(">>Plese enter edit mode first");
    }
  }
  increment_hours(): void {
    if (this.hours < 23) {
      this.hours++;
    } else {
      this.hours = 0;
    }
  }
  increment_minutes(): void {
    if (this.minutes < 23) {
      this.minutes++;
    } else {
      this.minutes = 0;
    }
  }
}
