export const updatePageTitle = (pageTitle) => {
  if (pageTitle === "Home") {
    document.title = `ALEXON UTHAYAKUMAR | Portfolio`;
    return;
  }
  document.title = `${pageTitle} | ALEXON UTHAYAKUMAR | Portfolio`;
};
