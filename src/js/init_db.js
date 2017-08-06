import Bookshelf from 'bookshelf';
import Knex from 'knex';

const knex = Knex({
  client: "sqlite3",
  connection: {
    filename: "./build/db.sqlite3"
  },
  useNullAsDefault: true
});


// TESTING BOOKSHELF
const bookshelf = Bookshelf(knex);

// Note the use of this inside functions.
// Do not use arrow functions here!!!
const Player = bookshelf.Model.extend({
  tableName: 'players',
  rankings: function() { return this.hasMany(Ranking) },
  tournaments: function() { return this.belongsToMany(Tournament) }
});

const Ranking = bookshelf.Model.extend({
  tableName: 'rankings',
  player: function() { return this.belongsTo(Player) }
});

const Tournament = bookshelf.Model.extend({
  tableName: 'tournaments',
  players: function() { return this.belongsToMany(Player) }
});

Player
  .where('id', 1)
  .fetch({withRelated: ['rankings']})
  .then(player => console.log(player.related('rankings').toJSON()))
  .catch(err => console.error(err));

Tournament
  .where('id', 1)
  .fetch({withRelated: ['players']})
  .then(tournament => console.log(tournament.related('players').toJSON()))
  .catch(err => console.error(err));
  
export default knex;