import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Page1() {
  return (
    <div>
        <div>
<Breadcrumb>
    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
        JRN Roofing
    </Breadcrumb.Item  >{"/"}

    <Breadcrumb linkAs={Link} linkProps={{ to: "/report"}}>
    Report
    </Breadcrumb>{"/"}
</Breadcrumb>

        </div>

        <p>Breadcrumbs</p>
        </div>
  )
}

export default Page1