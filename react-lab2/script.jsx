const menu = [
  {
    href: "1",
    label: "Home",
  },
  {
    href: "2",
    label: "About",
  },
];

const tData = [
  {
    name: "Ba",
    job: "Teacher",
  },
  {
    name: "Hoang",
    job: "Student",
  },
  {
    name: "Huy",
    job: "Student",
  },
  {
    name: "Quang",
    job: "Student",
  },
  {
    name: "Tu Anh",
    job: "Student",
  },
];

class Hellochild extends React.Component {
  render() {
    return <p>Hello Child {this.props.name}</p>;
  }
}

Hellochild.propTypes = {
  name: PropTypes.string,
};

class Clock extends React.Component {
  utc() {
    let now = new Date();
    let timezoneOffset = now.getTimezoneOffset();
    let utc = now.getTime() + timezoneOffset * 60 * 1000;
    return utc;
  }
  render() {
    return (
      <div>
        <p>
          {new Date(
            this.utc() + this.props.timezone * 60 * 60 * 1000
          ).toString()}
        </p>
        {this.props.children}
      </div>
    );
  }
}

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>World clock</h1>
//         <Clock timezone={7} />
//         <Clock timezone={-4}>
//           <Hellochild />
//         </Clock>
//         <Hellochild name={123}></Hellochild>
//       </div>
//     );
//   }
// }

class MenuItem extends React.Component {
  render() {
    return (
      <li className="menu-item">
        <a href={this.props.href} className="menu-link">
          {this.props.children}
        </a>
      </li>
    );
  }
}

class Menu extends React.Component {
  render() {
    return (
      <ul className="menu d-flex flex-row">
        {this.props.menu.map((item) => (
          <MenuItem key={item.href} href={item.href}>
            {item.label}
          </MenuItem>
        ))}
      </ul>
    );
  }
}

class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <img src="https://th.bing.com/th/id/OIP.9whUdfSo0zu-wXDW0AKetAHaHa?w=163&h=180&c=7&r=0&o=5&pid=1.7" />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <Logo />
            </div>
            <div className="col-5">
              <Menu />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

class TableHead extends React.Component {
  render() {
    return (
      <thead>
        <th>Name</th>
        <th>Job</th>
      </thead>
    );
  }
}

class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.job}</td>
      </tr>
    );
  }
}

class Table extends React.Component {
  render() {
    return (
      <table>
        <TableHead />
        {this.props.tData.map(({ name, job }) => (
          <TableRow key={name} name={name} job={job} />
        ))}
      </table>
    );
  }
}

class App extends React.Component {
  render() {
    return <Table tData={tData} />;
  }
}

ReactDOM.render(<App />, document.getElementById("App"));
