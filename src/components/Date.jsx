import React, { useState, useEffect } from "react";

const DateComponent = () => {
  const [initialRenderDate, setInitialRenderDate] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = formatInitialRenderDate(currentDate);
    setInitialRenderDate(formattedDate);
  }, []);

  const formatInitialRenderDate = (date) => {
    const daysAgo = Math.floor(
      (Date.now() - date.getTime()) / (1000 * 3600 * 24)
    );
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const dateString = date.toLocaleString("en-US", options);
    return `${dateString} (${daysAgo} days ago)`;
  };

  return (
    <div style={{ fontFamily: "DM sans" }}>
      {initialRenderDate ? `${initialRenderDate}` : "Loading..."}
    </div>
  );
};

export default DateComponent;
