import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

function Seo({ description, lang, meta, title }) {
  return <></>;
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Seo;
