import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($uname: String!) {
    user(uname: $uname) {
      _id
      uname
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      uname
      email
    }
  }
`;

export const QUERY_MERCHANTS = gql`
  query merchants {
    merchants {
      _id
      mname
      mtype
      mdesc
    }
  }
`;
