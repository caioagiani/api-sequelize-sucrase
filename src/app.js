import server from './server';

server.listen(process.env.PORT || 3333, () =>
  console.log({ server: 'on', port: 3333 })
);
