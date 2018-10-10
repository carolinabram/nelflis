import users from './users';
import categories from './categories';
import ratings from './ratings';
import movies from './movies';


export default {
    ...users,
    ...categories,
    ...ratings,
    ...movies
}