import React from "react";
import PropTypes from "prop-types";
import YoutubeEmbedStyles from "./YoutubeEmbed.css";

const YoutubeEmbed = ({ url }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={ url }
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    <p>Youtube Embed Component</p>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;