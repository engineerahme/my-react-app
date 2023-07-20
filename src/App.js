



function App() {
  return (
  <>

  
        <nav className="navbar navbar-expand-lg navbar-light bg-none mx-5">
          <a className="navbar-brand" href="https://penny.co">
            <img src="imags/Penny-Logo.svg" alt="Logo" className="d-inline-block align-text-top" width={130} height={50} />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Products
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Company
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Resources
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="https://penny.co/pricing/">Pricing <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://penny.co/contact-us/">Contact</a>
              </li>
            </ul>
            <form className="form-inline  my-2 my-lg-0">
              <button className="btn btn-light my-2 my-sm-0 mx-2" herf="https://penny.co/ar/" type="submit">العربية</button>
              <button className="btn btn-warning  my-2 my-sm-0 mx-2" herf="https://penny.co/request-demo/" type="submit">REQUEST
                DEMO</button>
            </form>
          </div>
        </nav>
        <section className="hero ">
          <div className="container">
            <h1 className="heading-title1 ">
              Customizable Procurement Software
              <br />
              <span style={{color: '#000'}}> that tailors to your needs
              </span>
            </h1>
            <h4 className="heading-title2 my-5">
              Boost your procurement
              <span className="green">efficiency</span>
              through
              <br />
              a digital platform that flexibly adapts to your organization
            </h4>
            <button className="btn btn-warning my-2 my-sm-0 mx-2 " herf="https://penny.co/request-demo/" type="submit">REQUEST
              DEMO <i className="bi bi-arrow-right" />
            </button>
          </div>
        </section>
        {/* =========================== second-section========================= */}
        <section className="second-section">
          <div className="row mx-0">
            <div className="col-12" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img src="/imags/Landing-image-Recovered.webp" className="img-fluid photo1" alt="data" style={{width: '1120px', height: '593px'}} />
            </div>
          </div>
          <div className="row mx-0">
            <div className="col-12">
              <h2>
                Trusted by leading brands globally
              </h2>
            </div>
          </div>
          <div className="container">
            <div className="row mx-0 mx-md-5 second-section2  g-2 g-lg-3">
              <div className="col img-out">
                <img src="imags/Group-12178-1.webp" alt="unipart logistics" />
              </div>
              <div className="col img-out">
                <img src="imags/Carrier-1.webp" alt="carrier" />
              </div>
              <div className="col img-out">
                <img src="imags/Group-12180-1.webp" alt="solution" />
              </div>
              <div className="col img-out">
                <img src="imags/Kempinski-1.webp" alt="Kempinski" />
              </div>
              <div className="col img-out">
                <img src="imags/Voltalia.svg" alt="Voltalia" />
              </div>
              <div className="col img-out">
                <img src="imags/Group-12192.webp" alt="almoaayed" />
              </div>
              <div className="col img-out">
                <img src="imags/Msc-1.webp" alt="msc" />
              </div>
              <div className="col img-out">
                <img src="imags/Group-9994.png" alt="dallah albaraka" />
              </div>
            </div>
          </div>
        </section>
        {/*             third section             */}
        <section className="products">
          <div className="row mx-0">
            <div className="col-12 ">
              <h2>
                Our Products
              </h2>
            </div>
          </div>
        </section>
        {/*            fourth section         */}
        <section className="source">
          <div className="row mx-0 text-center">
            <div className="col-12">
              <h2>
                Source-to-pay
              </h2>
              <h4>
                Source-to-pay &amp; everything in between
              </h4>
            </div>
          </div>
          <div className="row mx-0  d-flex justify-content-center ">
            <div className="col-6 my-4">
              <button className="btn btn-warning2 my-2 my-sm-0 mx-2 " herf="https://penny.co/request-demo/" type="submit">REQUEST
                DEMO <i className="bi bi-arrow-right" /></button>
              <button className="btn btn-light2 my-2 my-sm-0 mx-2 " herf="https://penny.co/source-to-pay/" type="submit">Learn
                more
                <i className="bi bi-arrow-right" /></button>
            </div>
          </div>
          <div className="row mx-0">
            <div className="col-12" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img src="imags/Source-to-pay-1.webp" className="photo-2" alt="source-to-pay" style={{width: '710px', height: '440px'}} />
            </div>
          </div>
        </section>
        {/*            fifth section         */}
        <section className="reseller">
          <div className="row mx-0 text-center">
            <div className="col-12">
              <h2>
                Reseller
              </h2>
              <h4>
                Purchase, Sell &amp; Markup made easy.
              </h4>
            </div>
          </div>
          <div className="row mx-0  d-flex justify-content-center ">
            <div className="col-6 my-4">
              <button className="btn btn-warning3 my-2 my-sm-0 mx-2 " herf="https://penny.co/request-demo/" type="submit">REQUEST
                DEMO <i className="bi bi-arrow-right" /></button>
              <button className="btn btn-light3 my-2 my-sm-0 mx-2 " herf="https://penny.co/source-to-pay/" type="submit">Learn
                more
                <i className="bi bi-arrow-right" /></button>
            </div>
          </div>
          <div className="row mx-0">
            <div className="col-12" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img src="imags/Reseller-2048x1149-1.png" className="photo-3" alt="source-to-pay" style={{width: '710px', height: '440px'}} />
            </div>
          </div>
        </section>
        {/*            sixth section         */}
        <section className="supplier">
          <div className="row mx-0 text-center">
            <div className="col-12">
              <h2>
                Supplier Store
              </h2>
              <h4>
                A B2B E-commerce Platform
              </h4>
            </div>
          </div>
          <div className="row mx-0  d-flex justify-content-center ">
            <div className="col-6 my-4">
              <button className="btn btn-warning4 my-2 my-sm-0 mx-2 " herf="https://penny.co/request-demo/" type="submit">REQUEST
                DEMO <i className="bi bi-arrow-right" /></button>
              <button className="btn btn-light4 my-2 my-sm-0 mx-2 " herf="https://penny.co/source-to-pay/" type="submit">Learn
                more
                <i className="bi bi-arrow-right" /></button>
            </div>
          </div>
          <div className="row mx-0">
            <div className="col-12" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img src="imags/Supplier-store.webp" className="photo-4" alt="source-to-pay" style={{width: '710px', height: '440px'}} />
            </div>
          </div>
        </section>
        {/*            seventh section         */}
        <section className="Solution">
          <div className="row mx-0 text-center">
            <div className=" col-12">
              <h2 className="text-1">
                Featured in ProcureTech &amp; Kearny Consulting
              </h2>
              <h2 className="text-2">
                Top 100 Solution
              </h2>
            </div>
            <div className="col-12 my-4">
              <img src="imags/Copy-of-Top-100-copy.webp" className="photo-5" alt="source-to-pay" style={{width: '710px', height: '440px'}} />
            </div>
          </div></section>
        {/*             section  8       */}
        <section className="whypenny">
          <div className="row mx-0 text-center">
            <div className=" col-12">
              <h6>
                Why penny?
              </h6>
            </div>
            <div className=" col-12">
              <h4>
                Penny is designed to make things easy, and consolidate
                <br />
                all your procurement into one intelligent system
              </h4>
            </div>
          </div>
          <div className="container">
            <div className="row mx-0 my-5 d-flex justify-content-center  text-center">
              <div className="col-4" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div className="small-img">
                  <img src="imags/Settings.svg" className="photo-s1" alt="source-to-pay" style={{width: '32px', height: '32px'}} />
                </div>
                <h2 className="text-s1">
                  User friendly platform
                </h2>
              </div>
              <div className="col-4" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div className="small-img">
                  <img src="imags/Modular-Approach.svg" className="photo-s1" alt="source-to-pay" style={{width: '32px', height: '32px'}} />
                </div>
                <h2 className="text-s1">
                  Modular Approach
                </h2>
              </div>
              <div className="col-4" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div className="small-img">
                  <img src="imags/Easy-to-Impliment.svg" className="photo-s1" alt="source-to-pay" style={{width: '32px', height: '32px'}} />
                </div>
                <h2 className="text-s1">
                  Easy to Implement
                </h2>
              </div>
            </div>
            <div className="row mx-0 my-5 d-flex justify-content-center">
              <div className="col-4" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div className="small-img">
                  <img src="imags/Proven-savings.svg" className="photo-s1" alt="source-to-pay" style={{width: '32px', height: '32px'}} />
                </div>
                <h2 className="text-s1">
                  Proven savings
                </h2>
              </div>
              <div className="col-4" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div className="small-img">
                  <img src="imags/Cloud-based-platform.svg" className="photo-s1" alt="source-to-pay" style={{width: '32px', height: '32px'}} />
                </div>
                <h2 className="text-s1">
                  Cloud based platform
                </h2>
              </div>
              <div className="col-4" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div className="small-img">
                  <img src="imags/Control-_-Compliance.svg" className="photo-s1" alt="source-to-pay" style={{width: '32px', height: '32px'}} />
                </div>
                <h2 className="text-s1">
                  Control &amp; Compliance
                </h2>
              </div>
            </div>
            <div className="row-4 mx-0 my-5 d-flex justify-content-center ">
              <div className="col-4 " style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div className="small-img">
                  <img src="imags/Realtime-visibility.svg" className="photo-s1" alt="source-to-pay" style={{width: '32px', height: '32px'}} />
                </div>
                <h2 className="text-s1">
                  Realtime visibility
                </h2>
              </div>
              <div className="col-4" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div className="small-img">
                  <img src="imags/Speed-up-Operation.svg" className="photo-s1" alt="source-to-pay" style={{width: '32px', height: '32px'}} />
                </div>
                <h2 className="text-s1">
                  Speed up Operation
                </h2>
              </div>
              <div className="col-4" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div className="small-img">
                  <img src="imags/Dedicated-Support.svg" className="photo-s1" alt="source-to-pay" style={{width: '32px', height: '32px'}} />
                </div>
                <h2 className="text-s1">
                  Dedicated Support
                </h2>
              </div>
            </div>
          </div>
          <div className="row mx-0 text-center ">
            <div className="col-12 my-5">
              <button className="btn btn-primary my-2 my-sm-0 mx-2 " herf="https://penny.co/precheck-request-demo/" type="submit">Get Started
                <i className="bi bi-arrow-right" />
              </button>
            </div>
          </div>
        </section>
        {/* section 9 */}
        <section className="ourpartners">
          <div className="row mx-0 text-center">
            <div className=" col-12">
              <h3 className="head-title">
                Our Partners
              </h3>
            </div>
          </div>
          <div className="container">
            <div className="row mx-0 text-center">
              <div className="col" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div className="medium-img">
                  <img src="imags/Mckinsey.png" className="photo-m1" alt="source-to-pay" style={{width: '144px', height: '144px'}} />
                </div>
              </div>
              <div className="col" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div className="medium-img">
                  <img src="imags/Procurement-leader.png" className="photo-m1" alt="source-to-pay" style={{width: '144px', height: '144px'}} />
                </div>
              </div>
              <div className="col" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div className="medium-img">
                  <img src="imags/S-normal-1.png" className="photo-m1" alt="source-to-pay" style={{width: '144px', height: '144px'}} />
                </div>
              </div>
              <div className="col" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div className="medium-img">
                  <img src="imags/ECS.png" className="photo-m1" alt="source-to-pay" style={{width: '144px', height: '144px'}} />
                </div>
              </div>
              <div className="col" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div className="medium-img">
                  <img src="imags/Mastercard.png" className="photo-m1" alt="source-to-pay" style={{width: '144px', height: '144px'}} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section 10 */}
        <section className="Procure">
          <div className="row mx-0 text-center">
            <div className=" col-12">
              <h2 className="head-title10">
                Procure to pay, and everything in between.
              </h2>
            </div>
          </div>
          <div className="container">
            <div className="row mx-0 text-center">
              <div className="col-2" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div className="medium-img2">
                  <img src="imags/Group-13891.svg" className="photo-m2" alt="source-to-pay" style={{width: '140px', position: 'relative', height: '140px'}} />
                  <div className="arrow">
                    <img src="imags/Arrow.svg" className="photo-arrow" alt="source-to-pay" style={{width: '72px', height: '72px'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*       section 11      */}
        <section className="form-section">
          <div className="row mx-0">
            <div className="col-md-12 my-5">
              <h2 className="form-text text-center ">
                We help you unlock
                <br />
                better Sourcing and Spend Management
              </h2>
            </div>
          </div>
          <div className="container">
            <form>
              <div className="form-row">
                <div className="form-group text-center col-md-4">
                  <label htmlFor="inputEmail4">Name<span>*</span> </label>
                </div>
                <div className="form-group col-md-4">
                  <input type="text" className="form-control" id="inputText4" />
                  <label htmlFor="inputEmail4">First Name</label>
                </div>
                <div className="form-group col-md-4">
                  <input type="text" className="form-control" id="inputText4" />
                  <label htmlFor="inputPassword4">Last Name</label>
                </div>
              </div>
              <div className="row mx-0 form-group">
                <div className="form-group text-center col-md-4">
                  <label htmlFor="inputEmail4"> Work Email <span>*</span> </label>
                </div>
                <div className="form-group  col-md-8">
                  <input type="email" className="form-control" id="inputEmail4" placeholder />
                </div>
              </div>
              <div className="row mx-0 form-group">
                <div className="form-group text-center col-md-4">
                  <label htmlFor="inputcompany4"> Company Name <span>*</span> </label>
                </div>
                <div className="form-group  col-md-8">
                  <input type="text" className="form-control" id="inputText4" placeholder />
                </div>
              </div>
              <div className="row mx-0 form-group">
                <div className="form-group text-center col-md-4">
                  <label htmlFor="inputphone4"> Phone</label>
                </div>
                <div className="form-group  col-md-8">
                  <input type="text" className="form-control" id="inputText4" placeholder />
                </div>
              </div>
              <div className="row mx-0 form-group">
                <div className="form-group text-center col-md-4">
                  <label htmlFor="inputmessage4">  Enter Your Message </label>
                </div>
                <div className="form-group  col-md-8">
                  <input type="text" className="form-control" id="inputText4" placeholder />
                </div>
              </div>
              <label className="descFld">
                <div>
                  <span className="font">By filling this form you accept the</span>
                  <a target="_blank" rel="noopener noreferrer" href="https://penny.co/legal-section/">
                    <span className="font">Terms and Conditions
                    </span>
                  </a>
                  <span className="colour">and the Privacy Policy statement
                  </span>
                </div>
              </label>
              <div className="clearBoth" />
              <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
            </form></div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-secondary">Sign in</button>
        </section>
        {/* section14 */}
        {/* footer */}
        <footer className="footer" style={{backgroundColor: '#000'}}>
          <div className="container">
            <div className="row mx-0   text-left d-flex">
              <div className=" col-6">
                <img src="imags/Screenshot_17-e1680688259645.png" className="photo-fo" alt="source-to-pay" style={{width: '180px', height: '68px'}} />
                <h2 className="head-footer">
                  Procurement solved
                </h2>
                <a className="arabic " href="https://penny.co/ar/" target="blank">
                  العربية
                </a>
              </div>
              <div className=" col-6 text-center">
                <a className="footer-img" href="https://sourceforge.net/software/product/Penny-Software/?pk_campaign=badge&pk_source=vendor">
                  <img src="imags/image-121.png" alt="Logo" className="d-inline-block align-text-top" width={61} height={56} />
                </a>
                <a className="footer-img" href="https://slashdot.org/software/p/Penny-Software/?pk_campaign=badge&pk_source=vendor">
                  <img src="imags/image-122.png" alt="Logo" className="d-inline-block align-text-top" width={63} height={53} />
                </a>
                <a className="footer-img" href="https://www.cybergrx.com/resources/introducing-cybergrx-exchange-member-emblems">
                  <img src="imags/cyberGRX-logo.png" alt="Logo" className="d-inline-block align-text-top" width={107} height={64} />
                </a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row mx-0 my-5 text-left  d-flex">
              <div className=" col-4">
                <h2 className="item-footer">
                  Source to Pay
                </h2>
                <ul className=" list-unstyled ">
                  <li><a href="#"><span className="icon-list">Requisition (PR)</span></a></li>
                  <li><a href="#"><span className="icon-list">Approval Workflow</span></a></li>
                  <li><a href="#"><span className="icon-list">Sourcing (RFQ,RFP,RFI)</span></a></li>
                  <li><a href="#"><span className="icon-list">Purchase Order (PO)</span></a></li>
                  <li><a href="#"><span className="icon-list">Good Received Note (GRN)</span></a></li>
                  <li><a href="#"><span className="icon-list">Bill</span></a></li>
                  <li><a href="#"><span className="icon-list">Payment</span></a></li>
                  <li><a href="#"><span className="icon-list">Catalog Management</span></a></li>
                  <li><a href="#"><span className="icon-list">Vendor &amp; Contract Management</span></a></li>
                  <li><a href="#"><span className="icon-list">Workspaces</span></a></li>
                  <li><a href="#"><span className="icon-list">ERP Integration</span></a></li>
                  <li><a href="#"><span className="icon-list">Enterprise Customization</span></a></li>
                </ul>
              </div>
              <div className=" col-4">
                <h2 className="item-footer">
                  Reseller</h2>
                <ul className=" list-unstyled  footer-ul">
                  <li><a href="#"><span className="icon-list">Private label</span></a></li>
                  <li><a href="#"><span className="icon-list">Manage clients</span></a></li>
                  <li><a href="#"><span className="icon-list">Manage vendors</span></a></li>
                  <li><a href="#"><span className="icon-list">Private catalogs</span></a></li>
                  <li><a href="#"><span className="icon-list">Receive and issue purchase orders</span></a></li>
                  <li><a href="#"><span className="icon-list">Manage prices by catalog or clients</span></a></li>
                  <li><a href="#"><span className="icon-list">Send RFQs to vendors</span></a></li>
                  <li><a href="#"><span className="icon-list">Manage markups and commissions</span></a></li>
                  <li><a href="#"><span className="icon-list">Manage received note anddelivery notes</span></a></li>
                  <li><a href="#"><span className="icon-list">Receive bills and generate invoices</span></a></li>
                  <li><a href="#"><span className="icon-list">Receive and issue purchase orders</span></a></li>
                  <li><a href="#"><span className="icon-list">Manage payments</span></a></li>
                </ul>
              </div>
              <div className=" col-4">
                <h2 className="item-footer">
                  Supplier Store
                </h2>
                <ul className=" list-unstyled">
                  <li><a href="#"><span className="icon-list">Private label</span></a></li>
                  <li><a href="#"><span className="icon-list">Catalog management</span></a></li>
                  <li><a href="#"><span className="icon-list">Client management</span></a></li>
                  <li><a href="#"><span className="icon-list">Receive RFQs from clients and manage Offers</span></a></li>
                  <li><a href="#"><span className="icon-list">Receive PO</span></a></li>
                  <li><a href="#"><span className="icon-list">Manage Deliveries</span></a></li>
                  <li><a href="#"><span className="icon-list">Manage Invoices and payments</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
  
  </>
  );
}

export default App;
