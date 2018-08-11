import users from './users';
import movies from './movies';
import ratings from './ratings';
import genres from './genres';

export default {
    ...users,
    ...ratings,
    ...genres,
    ...movies
}