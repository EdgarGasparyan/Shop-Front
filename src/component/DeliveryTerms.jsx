import React from "react";

const DeliveryTerms = () => {
  return (
    <>
      <div className="row d-flex justify-content-center justify-content-lg-between p-4 m-0">
        <ol className="list-group list-group-light list-group-numbered">
          <div className="fw-bold text-pink border-bottom">
            ԻՆՉՊԵՍ ՊԱՏՎԻՐԵԼ ԿԱՅՔԻՑ
          </div>
          <li className="list-group-item d-flex justify-content-between border-0 align-items-start">
            <div className="ms-2 me-auto fw-bold">Օնլայն պատվեր գրանցելով</div>
          </li>
          <li className="list-group-item d-flex justify-content-between border-0 align-items-start ">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Հեռախոսազանգով</div>
              <div>
                <p className="mb-0">+374 00000000</p>
                <p className="mb-0">+374 00000000</p>
              </div>
            </div>
          </li>
        </ol>
      </div>
      <div className="row d-flex justify-content-center justify-content-lg-between p-4 m-0">
        <ol className="list-group list-group-light list-group-numbered">
          <div className="fw-bold text-pink border-bottom">
            ԱՌԱՔՄԱՆ ՊԱՅՄԱՆՆԵՐԸ
          </div>
          <li className="list-group-item d-flex justify-content-between border-0 align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Առաքման արժեքը․</div>
              <div>
                <p className="mb-0">
                  300֏ եթե պատվերը կազմում է 4000֏ -ից ավել։
                </p>
                <p className="mb-0">
                  500֏ եթե պատվերը կազմում է 4000֏ -ից պակաս։
                </p>
              </div>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between border-0 align-items-start ">
            <div className="ms-2 me-auto">
              <div className="fw-bold ">Առաքման ժամկետ.</div>
              <div>
                <p className="mb-0">
                  Առաքումները կատրվում են պատվերը հաստատվելուց մեկ աշխատանքային
                  օրվա ընթացքում։
                </p>
                <p className="mb-0">
                  Առաքումները կատրվում են Երկուշաբթիից - շաբաթ։
                </p>
                <p className="mb-0">Հանգստյան օր կիրակի:</p>
              </div>
            </div>
          </li>
        </ol>
      </div>

      <div className="row d-flex justify-content-center justify-content-lg-between p-4 m-0">
        <ol className="list-group list-group-light list-group-numbered">
          <div className="fw-bold text-pink border-bottom">
            ՎՃԱՐՄԱՆ ԵՂԱՆԱԿՆԵՐԸ
          </div>
          <li className="list-group-item d-flex justify-content-between border-0 align-items-start">
            <div className="ms-2 me-auto fw-bold">
              Կանխիկ՝ անմիջապես պատվերը ստանալու պահին:
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between border-0 align-items-start">
            <div className="ms-2 me-auto fw-bold">
              Փոխանցում քարտին 0000 0000 0000 0000 (կարող եք փոխանցում կատարել
              ապրանքը ստանալու պահին,ձեր հեռախոսի օնլայն հավելվածի միջոցով):
            </div>
          </li>
        </ol>
      </div>
    </>
  );
};

export default DeliveryTerms;
