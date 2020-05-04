interface Variables {
  API_URL: string;
}

const vars: Variables = {
  API_URL: (process.env.REACT_APP_API_URL || '').replace(/\/+$/, ''),
};

export default vars;
