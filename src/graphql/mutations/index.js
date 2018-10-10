import Users from './users';
import Categories from './categories';
import Ratings from './ratings';
import Movies from './movies';


export default {
    ...Users,
    ...Categories,
    ...Ratings,
    ...Movies
}