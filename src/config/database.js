module.exports = {
  dialect: process.env.driver,
  host: process.env.host,
  username: process.env.user,
  password: process.env.pass,
  database: process.env.base,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
