import React from "react";

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28908.392773000778!2d55.12206052297888!3d25.083267522737987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b5402c126e3%3A0xb9511e6655c46d7c!2zRHViYWkgTWFyaW5hIC0g0JTRg9Cx0LDQuCAtINCj0ZjQtdC00LjRmtC10L3QuCDQkNGA0LDQv9GB0LrQuCDQldC80LjRgNCw0YLQuA!5e0!3m2!1ssr!2srs!4v1674773133494!5m2!1ssr!2srs"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Dubai Marine Map"
      sandbox="allow-scripts allow-modal"
    ></iframe>
  );
};

export default Map;
