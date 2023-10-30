const dbFooter = {
  title: 'ngkhang',
};

function Footer() {
  return (
    <div className="mt-5 text-center">
      <p className="py-5 bg-blue-100">
        &copy;
        <em id="date">
          {new Date().getFullYear()}
        </em>
        {dbFooter.title}
      </p>
    </div>
  );
}

export default Footer;
