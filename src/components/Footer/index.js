import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      <section className="h-25">
        <div className="container text-center text-md-start pt-3">
          <div className="row mt-3">
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <div className="bg-image hover-overlay shadow-1-strong rounded" data-mdb-ripple-init data-ripple-color="light">
                <img src={`${process.env.PUBLIC_URL}/images/markus/logo.png`} alt="Markus Logo" height="70px" />
                <a href="#!">
                  <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                </a>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Payments</h6>
              <div className="bg-image hover-overlay shadow-1-strong rounded" data-mdb-ripple-init data-ripple-color="light">
                <p>Credit</p>
                <img src={`${process.env.PUBLIC_URL}/images/creditCards/visaMaster.png`} style={{ height: '25px' }} alt="Credit Cards" />
                <a href="#!">
                  <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                </a>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
              <p className="m-0">Rua cais do apolo, 989 - Recife, PE</p>
              <p className="m-0">
                Email: <a href="mailto:lvd@cesar.school">lvd@cesar.school</a>
              </p>
              <p className="m-0">
                WhatsApp: <a href="mailto:lvd@cesar.school">+55 (81) 99999-8888</a>
              </p>
              <p className="mb-3">Urgencia: +55 81 3236-8686</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright: Markus
      </div>
    </footer>
  );
};

export default Footer;
