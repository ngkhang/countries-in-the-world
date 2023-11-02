const dbFooter = {
  title: 'ngkhang',
};

function Footer() {
  return (
    <div className="text-center">
      <p className="py-5 bg-blue-100 md:text-lg">
        &copy;
        <em id="date">
          {`${new Date().getFullYear()} ${dbFooter.title}`}
        </em>
      </p>
    </div>
  );
}

export default Footer;
