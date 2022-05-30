import React from 'react';

const MerchantList = ({ merchants, title }) => {
  if (!merchants.length) {
    return <h3>No Stores Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {merchants &&
          merchants.map((merchant) => (
            <div key={merchant._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {merchant.mname} <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    {merchant.mdesc}
                  </span>
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MerchantList;
