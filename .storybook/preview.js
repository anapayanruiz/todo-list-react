/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // Enables auto-generated documentation for all stories
  tags: [
    "autodocs",
    // {
    //   name: "Chromatic",
    //   type: "chromatic",
    //   value: {
    //     viewports: [
    //       {
    //         name: "Desktop",
    //         styles: {
    //           width: "1440px",
    //           height: "1024px",
    //         },
    //       },
    //       {
    //         name: "Tablet",
    //         styles: {
    //           width: "768px",
    //           height: "1024px",
    //         },
    //       },
    //       {
    //         name: "Mobile",
    //         styles: {
    //           width: "375px",
    //           height: "812px",
    //         },
    //       },
    //     ],
    //   },
    // },
  ],
};

export default preview;
