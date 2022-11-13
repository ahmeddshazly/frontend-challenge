import renderer from 'react-test-renderer';
//Snapshot test
it('renders correctly', () => {
  const tree = renderer
    .create(
      <div>
        <div className="makeStyles-logo-11"></div>
        <div className="makeStyles-logoText-12">eco.mio</div>
      </div>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
