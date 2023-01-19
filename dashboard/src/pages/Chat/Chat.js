import React, { useCallback, useEffect, useState } from "react"
import MetaTags from 'react-meta-tags';
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { isEmpty, map } from "lodash"
import moment from "moment"
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  UncontrolledDropdown,
} from "reactstrap"
import classnames from "classnames"

//Import Scrollbar
import PerfectScrollbar from "react-perfect-scrollbar"
import "react-perfect-scrollbar/dist/css/styles.css"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import user1 from "../../assets/images/users/avatar-1.jpg"
import * as images from "../../assets/images/index"
import {
  addMessage,
  getChats,
  getContacts,
  getGroups,
  getMessages,
} from "../../store/actions"

const Chat = props => {
  const { chats, groups, contacts, messages } = props
  const [messageBox, setMessageBox] = useState(null)
  const [currentRoomId, setCurrentRoomId] = useState(1)
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState({
    name: "Henry Wells",
    isActive: true,
  })
  const [menu1, setMenu1] = useState(false);
  const [search_Menu, setsearch_Menu] = useState(false)
  const [Chat_Box_Image, setChat_Box_Image] = useState(user1)
  const [settings_Menu, setsettings_Menu] = useState(false)
  const [other_Menu, setother_Menu] = useState(false)
  const [activeTab, setactiveTab] = useState("1")
  // eslint-disable-next-line no-unused-vars
  const [Chat_Box_User_Status, setChat_Box_User_Status] = useState("online")
  const [curMessage, setcurMessage] = useState("")

  const [Chat_GROUP_IMAGE, setChat_GROUP_IMAGE] = useState("G");
  const [Chat_Contact_Image, setChat_Contact_Image] = useState("A");


  const [Chat_GROUP_USERNAME, setChat_GROUP_USERNAME] = useState("Steven Franklin")

  const [Chat_ACTIVE_TAB, setChat_ACTIVE_TAB] = useState("chat")

  const { onGetChats, onGetGroups, onGetContacts, onGetMessages } = props;

  const scrollToBottom = useCallback(() => {
    if (messageBox) {
      messageBox.scrollTop = messageBox.scrollHeight + 1000
    }
  }, [messageBox])

  useEffect(() => {
    onGetChats()
    onGetGroups()
    onGetContacts()
    onGetMessages(currentRoomId)
  }, [onGetChats, onGetGroups, onGetContacts, onGetMessages, currentRoomId])

  useEffect(() => {
    if (!isEmpty(messages)) scrollToBottom()
  }, [messages, scrollToBottom])

  // const toggleNotification = () => {
  //   setnotification_Menu(!notification_Menu)
  // }

  //Toggle Chat Box Menus
  const toggleSearch = () => {
    setsearch_Menu(!search_Menu)
  }

  const toggleSettings = () => {
    setsettings_Menu(!settings_Menu)
  }

  const toggleOther = () => {
    setother_Menu(!other_Menu)
  }

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setactiveTab(tab)
    }

  }

  const changeactive_tab = (activte) => {
    setChat_Box_Image(user1)

    setChat_GROUP_IMAGE('G')
    setChat_Contact_Image('A')
    setChat_ACTIVE_TAB(activte)
  }

  //Use For Chat Box
  const userChatOpen = (id, image, name, status, roomId) => {
    const { onGetMessages } = props

    setChat_Box_Image(image)
    setChat_Contact_Image(image)
    setChat_GROUP_IMAGE(image)
    setChat_GROUP_USERNAME(name)

    setCurrentRoomId(roomId)
    onGetMessages(roomId)
  }

  const addMessage = (roomId, sender) => {
    const { onAddMessage } = props
    const message = {
      id: Math.floor(Math.random() * 100),
      roomId,
      sender,
      message: curMessage,
      createdAt: new Date(),
    }
    setcurMessage("")
    onAddMessage(message)
  }

  const onKeyPress = e => {
    const { key, value } = e
    if (key === "Enter") {
      setcurMessage(value)
      addMessage(currentRoomId, currentUser.name)
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Chat | Revo Node Manager</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Apps" breadcrumbItem="Chat" />

          <Row>
            <Col lg="12">
              <div className="d-lg-flex">
                <Card className="chat-leftsidebar">

                    <div className="p-3 px-4 bg-light">
                      <div className="d-flex align-items-start">
                        <div className="align-self-center me-3">
                          <img
                            src={images.avatar1}
                            className="avatar-xs rounded-circle"
                            alt=""
                          />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-size-15 mt-0 mb-1">
                            {currentUser.name}
                          </h5>
                          <p className="text-muted mb-0">
                            <i className="mdi mdi-circle text-success align-middle me-1" />
                            Active
                          </p>
                        </div>



                        <Dropdown
                          isOpen={menu1}
                          toggle={() => setMenu1(!menu1)}
                          className="float-end ms-2"
                        >
                          <DropdownToggle tag="i" className="text-muted">
                            <i className="mdi mdi-dots-horizontal font-size-18"></i>
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-end">
                            <DropdownItem href="#">Action</DropdownItem>
                            <DropdownItem href="#">Another action</DropdownItem>
                            <DropdownItem href="#">Something else</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>

                      </div>
                    </div>
                    <div className="p-3">
                      <div className="search-box chat-search-box">
                        <div className="position-relative">
                          <input
                            type="text"
                            className="border-light rounded form-control"
                            placeholder="Search..."
                          />
                          <i className="bx bx-search-alt search-icon" />
                        </div>
                      </div>
                    </div>

                    <div className="chat-leftsidebar-nav p-4 pt-0">
                      <Nav pills justified>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: activeTab === "1",
                            })}
                            onClick={() => {
                              toggleTab("1")
                              changeactive_tab('chat')
                            }}
                          >
                            <i className="bx bx-chat font-size-20 d-sm-none" />
                            <span className="d-none d-sm-block">Chat</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: activeTab === "2",
                            })}
                            onClick={() => {
                              toggleTab("2")
                              changeactive_tab('group')
                            }}
                          >
                            <i className="bx bx-group font-size-20 d-sm-none" />
                            <span className="d-none d-sm-block">Group</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: activeTab === "3",
                            })}
                            onClick={() => {
                              toggleTab("3")
                              changeactive_tab('contact')
                            }}
                          >
                            <i className="bx bx-book-content font-size-20 d-sm-none" />
                            <span className="d-none d-sm-block">Contacts</span>
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent activeTab={activeTab} className="pt-4">
                        <TabPane tabId="1">
                          <div>
                            <h5 className="font-size-14 mb-3">Recent</h5>
                            <ul className="list-unstyled chat-list">
                              <PerfectScrollbar style={{ height: "380px" }}>
                                {map(chats, chat => (
                                  <li
                                    key={chat.id + chat.status}
                                    className={
                                      currentRoomId === chat.roomId
                                        ? "active"
                                        : ""
                                    }
                                  >

                                    <Link
                                      to="#"
                                      onClick={() => {
                                        userChatOpen(
                                          chat.id,
                                          chat.image,
                                          chat.name,
                                          chat.status,
                                          chat.roomId
                                        )
                                      }}
                                    >
                                      <div className="d-flex align-items-start">
                                        <div className="align-self-center me-3">
                                          <i
                                            className={
                                              chat.status === "online"
                                                ? "mdi mdi-circle text-success font-size-10"
                                                : chat.status === "intermediate"
                                                  ? "mdi mdi-circle text-warning font-size-10"
                                                  : "mdi mdi-circle font-size-10"
                                            }
                                          />
                                        </div>
                                        <div className="user-img online align-self-center me-3">
                                          <img
                                            src={chat.image}
                                            className="rounded-circle avatar-xs"
                                            alt=""
                                          />
                                        </div>

                                        <div className="flex-1 overflow-hidden">
                                          <h5 className="text-truncate font-size-14 mb-1">
                                            {chat.name}
                                          </h5>
                                          <p className="text-truncate mb-0">
                                            {chat.description}
                                          </p>
                                        </div>
                                        <div className="font-size-11">
                                          {chat.time}
                                        </div>
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </PerfectScrollbar>
                            </ul>
                          </div>
                        </TabPane>

                        <TabPane tabId="2">
                          <h5 className="font-size-14 mb-3">Group</h5>
                          <ul className="list-unstyled chat-list">
                            <PerfectScrollbar style={{ height: "380px" }}>
                              {groups &&
                                groups.map(group => (
                                  <li key={"test" + group.image}>
                                    <Link
                                      to="#"
                                      onClick={() => {
                                        userChatOpen(
                                          group.id,
                                          group.image,
                                          group.name,
                                          group.status,
                                          Math.floor(Math.random() * 100)
                                        )
                                      }}
                                    >
                                      <div className="d-flex align-items-center">
                                        <div className="avatar-xs me-3">
                                          <span className="avatar-title rounded-circle bg-primary bg-soft text-primary">
                                            {group.image}
                                          </span>
                                        </div>

                                        <div className="flex-1">
                                          <h5 className="font-size-14 mb-0">
                                            {group.name}
                                          </h5>
                                        </div>
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                            </PerfectScrollbar>
                          </ul>
                        </TabPane>

                        <TabPane tabId="3">
                          <h5 className="font-size-14 mb-3">Contact</h5>

                          <div>
                            <PerfectScrollbar style={{ height: "380px" }}>
                              {contacts &&
                                contacts.map(contact => (
                                  <div
                                    key={"test_" + contact.category}
                                    className={
                                      contact.category === "A" ? "" : "mt-4"
                                    }
                                  >
                                    <div className="avatar-xs mb-3">
                                      <span className="avatar-title rounded-circle bg-primary bg-soft text-primary">
                                        {contact.category}
                                      </span>
                                    </div>

                                    <ul className="list-unstyled chat-list">
                                      {contact.child.map(array => (
                                        <li key={"test" + array.id}>
                                          <Link
                                            to="#"
                                            onClick={() => {
                                              userChatOpen(
                                                array.id,
                                                contact.category,
                                                array.name,
                                                array.status,
                                                Math.floor(Math.random() * 100)
                                              )
                                            }}
                                          >
                                            <h5 className="font-size-14 mb-0">
                                              {array.name}
                                            </h5>
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                            </PerfectScrollbar>
                          </div>
                        </TabPane>
                      </TabContent>
                    </div>

                </Card>
                <div className="w-100 user-chat mt-4 mt-sm-0 ms-lg-1">
                  <Card>
                    <div className="p-3 px-lg-4 border-bottom">
                      <Row>
                        <Col md="4" xs="6">
                          <div className="d-flex align-items-center">

                            {Chat_ACTIVE_TAB === 'chat' ? (
                              <div className="me-3 ms-0">
                                <img src={Chat_Box_Image} className="rounded-circle avatar-xs" alt="avatar" />
                              </div>
                            ) : null
                            }

                            {Chat_ACTIVE_TAB === 'group' ? (
                              <div className="avatar-xs me-3">
                                <span className="avatar-title rounded-circle bg-primary bg-soft text-primary">
                                  {Chat_GROUP_IMAGE}
                                </span>
                              </div>
                            ) : null
                            }

                            {Chat_ACTIVE_TAB === 'contact' ? (
                              <div className="avatar-xs me-3">
                                <span className="avatar-title rounded-circle bg-primary bg-soft text-primary">
                                  {Chat_Contact_Image}
                                </span>
                              </div>
                            ) : null
                            }

                            <h5 className="font-size-15 mb-1">
                              {Chat_GROUP_USERNAME}
                            </h5>

                            <p className="text-muted mb-0">
                              <i
                                className={
                                  Chat_Box_User_Status === "online"
                                    ? "mdi mdi-circle text-success align-middle me-1"
                                    : Chat_Box_User_Status === "intermediate"
                                      ? "mdi mdi-circle text-warning align-middle me-1"
                                      : "mdi mdi-circle align-middle me-1"
                                }
                              />
                              {Chat_Box_User_Status}
                            </p>
                          </div>
                        </Col>
                        <Col md="8" xs="3">
                          <ul className="list-inline user-chat-nav text-end mb-0">
                            <li className="list-inline-item d-none d-sm-inline-block  ">
                              <Dropdown
                                isOpen={search_Menu}
                                toggle={toggleSearch}
                              >
                                <DropdownToggle className="btn nav-btn" tag="i">
                                  <i className="bx bx-search-alt-2" />
                                </DropdownToggle>
                                <DropdownMenu
                                  className="dropdown-menu-md"
                                  right
                                >
                                  <Form className="p-3">
                                    <FormGroup className="m-0">
                                      <InputGroup>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          placeholder="Search ..."
                                          aria-label="Recipient's username"
                                        />
                                        <Button color="primary" type="submit">
                                          <i className="mdi mdi-magnify" />
                                        </Button>
                                      </InputGroup>
                                    </FormGroup>
                                  </Form>
                                </DropdownMenu>
                              </Dropdown>
                            </li>
                            <li className="list-inline-item  d-none d-sm-inline-block">
                              <Dropdown
                                isOpen={settings_Menu}
                                toggle={toggleSettings}
                              >
                                <DropdownToggle className="btn nav-btn" tag="i">
                                  <i className="bx bx-cog" />
                                </DropdownToggle>
                                <DropdownMenu right>
                                  <DropdownItem href="#">
                                    View Profile
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    Clear chat
                                  </DropdownItem>
                                  <DropdownItem href="#">Muted</DropdownItem>
                                  <DropdownItem href="#">Delete</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </li>
                            <li className="list-inline-item">
                              <Dropdown
                                isOpen={other_Menu}
                                toggle={toggleOther}
                              >
                                <DropdownToggle className="btn nav-btn" tag="i">
                                  <i className="bx bx-dots-horizontal-rounded" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">
                                  <DropdownItem href="#">Action</DropdownItem>
                                  <DropdownItem href="#">
                                    Another Action
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    Something else
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>

                    <div>
                      <div className="chat-conversation p-3">
                        <ul className="list-unstyled mb-0">
                          <PerfectScrollbar
                            style={{ height: "470px" }}
                            containerRef={ref => setMessageBox(ref)}
                          >
                            <li>
                              <div className="chat-day-title">
                                <span className="title">Today</span>
                              </div>
                            </li>
                            {messages &&
                              map(messages, message => (
                                <li
                                  key={"test_k" + message.id}
                                  className={
                                    message.sender === currentUser.name
                                      ? "right"
                                      : ""
                                  }
                                >
                                  <div className="conversation-list d-flex">
                                    <div className="chat-user-img online align-self-start order-3">
                                      <img src={user1} className="rounded-circle avatar-xs" alt="avatar" />
                                    </div>
                                    <div className="ctext-wrap">
                                      <div className="ctext-wrap-content">
                                        <p className="mb-0">{message.message} <span className="d-inline-block font-size-12 text-muted ms-3">
                                          {moment(message.createdAt).format(
                                            "DD-MM-YY hh:mm"
                                          )}</span></p>
                                      </div>

                                      <UncontrolledDropdown>
                                        <DropdownToggle
                                          href="#"
                                          className="btn nav-btn"
                                          tag="i"
                                        >
                                          <i className="bx bx-dots-vertical-rounded" />
                                        </DropdownToggle>
                                        <DropdownMenu direction="right">
                                          <DropdownItem href="#">
                                            Copy
                                        </DropdownItem>
                                          <DropdownItem href="#">
                                            Save
                                        </DropdownItem>
                                          <DropdownItem href="#">
                                            Forward
                                        </DropdownItem>
                                          <DropdownItem href="#">
                                            Delete
                                        </DropdownItem>
                                        </DropdownMenu>
                                      </UncontrolledDropdown>
                                    </div>
                                  </div>
                                </li>
                              ))}
                          </PerfectScrollbar>
                        </ul>
                      </div>
                      <div className="p-3 chat-input-section">
                        <Row>
                          <Col>
                            <div className="position-relative">
                              <input
                                type="text"
                                value={curMessage}
                                onKeyPress={onKeyPress}
                                onChange={e => setcurMessage(e.target.value)}
                                className="form-control chat-input rounded"
                                placeholder="Enter Message..."
                              />
                            </div>
                          </Col>
                          <Col className="col-auto">
                            <Button
                              type="button"
                              color="primary"
                              onClick={() =>
                                addMessage(currentRoomId, currentUser.name)
                              }

                              className="btn btn-primary chat-send w-md waves-effect waves-light"
                            >
                              <span className="d-none d-sm-inline-block me-2">
                                Send
                              </span>{" "}
                              <i className="mdi mdi-send float-end" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

Chat.propTypes = {
  chats: PropTypes.array,
  groups: PropTypes.array,
  contacts: PropTypes.array,
  messages: PropTypes.array,
  onGetChats: PropTypes.func,
  onGetGroups: PropTypes.func,
  onGetContacts: PropTypes.func,
  onGetMessages: PropTypes.func,
  onAddMessage: PropTypes.func,
}

const mapStateToProps = ({ chat }) => ({
  chats: chat.chats,
  groups: chat.groups,
  contacts: chat.contacts,
  messages: chat.messages,
})

const mapDispatchToProps = dispatch => ({
  onGetChats: () => dispatch(getChats()),
  onGetGroups: () => dispatch(getGroups()),
  onGetContacts: () => dispatch(getContacts()),
  onGetMessages: roomId => dispatch(getMessages(roomId)),
  onAddMessage: roomId => dispatch(addMessage(roomId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
