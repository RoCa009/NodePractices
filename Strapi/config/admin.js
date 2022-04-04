module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3f7c65687b1f8a0ec49305008e1a1caa'),
  },
});
