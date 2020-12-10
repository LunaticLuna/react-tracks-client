import React, {useState} from "react";
import { Query } from 'react-apollo'
import {gql} from 'apollo-boost'
import withStyles from "@material-ui/core/styles/withStyles";
import SearchTracks from '../components/Track/SearchTracks'
import TrackList from '../components/Track/TrackList'
import CreateTrack from '../components/Track/CreateTrack'
import Loading from '../components/Shared/Loading'
import Error from '../components/Shared/Error'


const App = ({ classes }) => {
  const [searchResults, setSearchResults] = useState([])

  return (
    <div className = {classes.container}>
      <SearchTracks setSearchResults = {setSearchResults} />
      <CreateTrack />
      <Query query = {GET_TRACKS_QUERY}>
        {({data,loading,error}) => {
          if (loading) return <Loading />
          if (error) return <Error error = {error} />
          const tracks = searchResults.length > 0 
                          ? searchResults : data.tracks
          console.log([...tracks,...defaultData])
          return <TrackList tracks = { [...tracks,...defaultData]} />

        }}
      </Query>
    </div>
    )
};
export const GET_TRACKS_QUERY = gql`
  query getTracksQuery {
    tracks{
      id
      title
      description
      url
      likes {
        id
      }
      postedBy {
        id
        username
      }
    }
  }
`

const styles = theme => ({
  container: {
    margin: "0 auto",
    maxWidth: 960,
    padding: theme.spacing.unit * 2
  }
});
const defaultData = [
  {
    description: "Track Description↵Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "2",
    likes: [],
    postedBy: {id: "3", username: "Sophia", __typename: "UserType"},
    title: "June - Bobby Richards",
    url: "http://res.cloudinary.com/jieli/raw/upload/v1607598592/hk7jjgmm7k0yqjrwbfrq.mp3",
  },
  {
    description: "Track Description↵Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "1",
    likes: [],
    postedBy: {id: "3", username: "Sophia", __typename: "UserType"},
    title: "June - Bobby Richards",
    url: "http://res.cloudinary.com/jieli/raw/upload/v1607598592/hk7jjgmm7k0yqjrwbfrq.mp3",
  },

{
    description: "Track Description↵Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: "3",
    likes: [],
    postedBy: {id: "3", username: "Sophia", __typename: "UserType"},
    title: "June - Bobby Richards",
    url: "http://res.cloudinary.com/jieli/raw/upload/v1607598592/hk7jjgmm7k0yqjrwbfrq.mp3",
  }

]

export default withStyles(styles)(App);
