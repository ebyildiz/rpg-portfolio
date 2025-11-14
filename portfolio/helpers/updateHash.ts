export const updateHash = (id: string, setHash: (value:string)=>void) => {
    setHash(id);
    history.replaceState(null, "", `#${id}`);
  };
  