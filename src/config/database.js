module.exports = {
  dialect: process.env.DRIVER,
  host: process.env.HOST,
  username: process.env.USER,
  password: process.env.PASS,
  database: process.env.BASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
