const isProd = process.argv.includes("--production");
const isDev = !process.argv.includes("--production");

export default {
    isProd: isProd,

    htmlmin:  {
        collapseWhitespace: isProd,
    },
    webpack: {
        mode: isProd ? "production" : "development",
    },
    imagemin: {
        verbose: true,
    },
    fonter: {
        formats: ["ttf", "woff", "eot", "svg"],
    },
}