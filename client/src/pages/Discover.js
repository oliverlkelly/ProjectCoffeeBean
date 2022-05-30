import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_MERCHANTS } from '../utils/queries';
import MerchantList from '../components/MerchantList';

const Home = () => {
  const { loading, data } = useQuery(QUERY_MERCHANTS);
  const merchants = data?.merchants || [];
  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          {loading ? (
              <div>Loading...</div>
            ) : (
              <MerchantList
                merchants={merchants}
                title="Look for stores below..."
              />
            )}
        </div>
      </div>
    </main>
  );
};

export default Home;
