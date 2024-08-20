import React, { useEffect, useRef } from "react";

const GitHubCalendarComponent = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframeDoc =
      iframeRef.current.contentDocument ||
      iframeRef.current.contentWindow.document;

    iframeDoc.open();
    iframeDoc.write(`
      <html>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css" />
        <style>
          body { margin: 0; }
        </style>
      </head>
      <body>
        <div class="github-calendar-container"></div>
        <script src="https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js"></script>
        <script>
          GitHubCalendar(".github-calendar-container", "Alexon1999", { responsive: true });
        </script>
      </body>
      </html>
    `);
    iframeDoc.close();
  }, []);

  return (
    <div
      className='calendar_div'
      style={{ border: "none", overflow: "hidden", width: "100%" }}>
      <iframe
        ref={iframeRef}
        title='GitHub Calendar'
        width='100%'
        style={{ border: "none", width: "100%", height: "300px" }}
      />
    </div>
  );
};

export default GitHubCalendarComponent;
