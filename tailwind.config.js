import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "Roboto"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
});
