import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Quote from "components/Typography/Quote.jsx";
import Muted from "components/Typography/Muted.jsx";
import Primary from "components/Typography/Primary.jsx";
import Info from "components/Typography/Info.jsx";
import Success from "components/Typography/Success.jsx";
import Warning from "components/Typography/Warning.jsx";
import Danger from "components/Typography/Danger.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

// import Tasks from "components/Tasks/Tasks.jsx";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";

import { bugs, website, server } from "variables/general";

const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
// function TypographyPage(props) {
//   const { classes } = props;
//   return (
//     <Card>
//       <CardHeader color="primary">
//         <h4 className={classes.cardTitleWhite}>Material Dashboard Heading</h4>
//         <p className={classes.cardCategoryWhite}>
//           Created using Roboto Font Family
//         </p>
//       </CardHeader>
//       <CardBody>
//         <div className={classes.typo}>
//           <div className={classes.note}>Header 1</div>
//           <h1>The Life of Material Dashboard</h1>
//         </div>
//         <div className={classes.typo}>
//           <div className={classes.note}>Header 2</div>
//           <h2>The Life of Material Dashboard</h2>
//         </div>
//         <div className={classes.typo}>
//           <div className={classes.note}>Header 3</div>
//           <h3>The Life of Material Dashboard</h3>
//         </div>
//         <div className={classes.typo}>
//           <div className={classes.note}>Header 4</div>
//           <h4>The Life of Material Dashboard</h4>
//         </div>
//         <div className={classes.typo}>
//           <div className={classes.note}>Header 5</div>
//           <h5>The Life of Material Dashboard</h5>
//         </div>
//         <div className={classes.typo}>
//           <div className={classes.note}>Header 6</div>
//           <h6>The Life of Material Dashboard</h6>
//         </div>
//         <div className={classes.typo}>
//           <div className={classes.note}>Paragraph</div>
//           <p>
//             I will be the leader of a company that ends up being worth billions
//             of dollars, because I got the answers. I understand culture. I am
//             the nucleus. I think that’s a responsibility that I have, to push
//             possibilities, to show people, this is the level that things could
//             be at.
//           </p>
//         </div>
//         <div className={classes.typo}>
//           <div className={classes.note}>Quote</div>
//           <Quote
//             text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
//             author=" Kanye West, Musician"
//           />
//         </div>
//         <div className={classes.typo}>
//           <div className={classes.note}>Muted Text</div>
//           <Muted>
//             I will be the leader of a company that ends up being worth billions
//             of dollars, because I got the answers...
//           </Muted>
//         </div>
//         <div className={classes.typo}>
//           <div className={classes.note}>Primary Text</div>
//           <Primary>
//             I will be the leader of a company that ends up being worth billions
//             of dollars, because I got the answers...
//           </Primary>
//         </div>
//         <div className={classes.typo}>
//           <div className={classes.note}>Info Text</div>
//           <Info>
//             I will be the leader of a company that ends up being worth billions
//             of dollars, because I got the answers...
//           </Info>
//         </div>
//         <div className={classes.typo}>
//           <div className={classes.note}>Success Text</div>
//           <Success>
//             I will be the leader of a company that ends up being worth billions
//             of dollars, because I got the answers...
//           </Success>
//         </div>
//         <div className={classes.typo}>
//           <div className={classes.note}>Warning Text</div>
//           <Warning>
//             I will be the leader of a company that ends up being worth billions
//             of dollars, because I got the answers...
//           </Warning>
//         </div>
//         <div className={classes.typo}>
//           <div className={classes.note}>Danger Text</div>
//           <Danger>
//             I will be the leader of a company that ends up being worth billions
//             of dollars, because I got the answers...
//           </Danger>
//         </div>
//         <div className={classes.typo}>
//           <div className={classes.note}>Small Tag</div>
//           <h2>
//             Header with small subtitle<br />
//             <small>Use "Small" tag for the headers</small>
//           </h2>
//         </div>
//       </CardBody>
//     </Card>
//   );
// }

function TypographyPage(props) {
  const { classes } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Employees</h4>
              <p className={classes.cardCategoryWhite}>
                Intel Israel Employees
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["ID", "Name", "Group", "Status", "Participation"]}
                // tableData={[
                //    <Tasks
                //     checkedIndexes={[0, 3]}
                //     tasksIndexes={[0, 1, 2, 3]}
                //     tasks={bugs}
                //   />
                // ]}
                tableData={[
                  ["304043078", "Dakota Rice", "North area", "Active", "538"],
                  [
                    "200053833",
                    "Minerva Hooper",
                    "Maintenance",
                    "Active",
                    "389"
                  ],
                  ["304043086", "Sage Rodriguez", "IT", "Inactive", "442"],
                  [
                    "026500264",
                    "Philip Chaney",
                    "Research & Development",
                    "Active",
                    "387"
                  ],
                  ["224825166", "Doris Greene", "Management", "Active", "542"],
                  ["051687713", "Mason Porter", "North area", "Inactive", "315"]
                ]}
              />
            </CardBody>
            <CardFooter>
              <Button color="primary">Create a new user</Button>
              <Button color="primary">Import users</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Employees</h4>
              <p className={classes.cardCategoryWhite}>
                Intel Israel Employees
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["ID", "Name", "Country", "City", "Salary"]}
                tableData={[]}
              />
              <Tasks
                checkedIndexes={[0, 3]}
                tasksIndexes={[0, 1, 2, 3]}
                tasks={bugs}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
export default withStyles(style)(TypographyPage);
