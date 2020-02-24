module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'gobarber',
  database: 'gobarber',
  timezone: '-03:00',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
