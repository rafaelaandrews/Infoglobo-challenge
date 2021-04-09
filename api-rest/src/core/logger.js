class Logger {
  constructor(mod) {
    this.module = mod;
  }

  info(...args) {
    console.log(`[${this.module}]`, ...args);
  }

  debug(...args) {
    console.log("[DEBUG]", `[${this.module}]`, ...args);
  }

  error(...args) {
    console.error(`[${this.module}]`, ...args);
  }

}

exports.Logger = Logger;