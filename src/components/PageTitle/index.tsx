import React from "react";

import "./slyles.scss";

interface IPageTitleParams {
    title: JSX.Element;
}

const PageTitle: React.FC<IPageTitleParams> = ({title}) => {
    return (
        <div className="pageTitle">{title}</div>
    )
}

export default PageTitle;