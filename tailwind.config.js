/** @type {import('tailwindcss').Config} */
module.exports = {
  _content: ["./src/**/*.{html,js}"],
  get content() {
    return this._content;
  },
  set content(value) {
    this._content = value;
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
