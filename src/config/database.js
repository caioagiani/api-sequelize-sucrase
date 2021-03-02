module.exports = {
  dialect: process.env.DRIVER,
  host: process.env.HOST,
  username: process.env.UNAME,
  password: process.env.PWORD,
  database: process.env.DBASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
