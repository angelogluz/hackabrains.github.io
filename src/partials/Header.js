import React from 'react'
import styled from 'styled-components'
import { throttle, } from 'lodash'
import { Cinzel } from '../components/Text'
import { Snows, Snow } from '../components/Snow'

const HeaderContainer = styled.div`
  overflow: hidden;
  height: 120vh;
  width: 100vw;
  position: relative;
  text-align: center;
`
const CinzelTitle = styled(Cinzel)`
  font-size: 3em;
  z-index: 99;
  color: black;
  big {
    font-size: 2em;
  }
  @media (max-width: 440px) {    
    font-size: 1.5em;
  }
`

const HeaderTop = styled.div`
  background-image: url(imgs/bg-1.png);
  background-size: cover;
  width: 100vw;
  height: 120vh;
  position: absolute;
  bottom: 184px;
  background-repeat: no-repeat;
  background-position: bottom;
  z-index: -1;
  transform: scale(1.2);
  transition: .2s;
`

const HeaderBottom = styled.div`
  background-image: url(imgs/bg-3.png);
  background-size: cover;
  background-position: center center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background-repeat: no-repeat;
  z-index: -2;
  transform: scale(1.15);
  transform-origin: center;
  transition: .1s;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    padding: 30px 30px;
    display: inline-block;
    transition: .5s;
    text-decoration: none;
    @media (max-width: 440px) {    
      font-size: .7em;
    }
    ${Cinzel} {
      border-bottom: 1px solid rgba(35, 38, 50, .3);
      transition: .5s;
    }
    &:hover ${Cinzel} {
      border-bottom: 1px solid rgba(35, 38, 50, .3);
      border-radius: 10px;
      padding: 0 10px;
    }
    &:active {
      opacity: .5;
    }
  }
`

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this._throttledMouseMove = throttle(this._throttledMouseMove.bind(this), 50);
  }
  state = {
    mouseXY: { x: 0, y: 0 }
  }
  componentDidMount() {
    window.addEventListener('deviceorientation', ({ alpha, gamma, beta }) => {
      this.setState({ mouseXY: { x: alpha + beta * 5, y: gamma + beta * 5 } })
    })
    Snow(this.canvas, 150, { color: 'white' })

  }
  _throttledMouseMove = ({ screenX: x, screenY: y }) => {
    console.log(this.state.mouseXY)
    this.setState({ mouseXY: { x, y } })
  }

  _onMouseMove = (e) => {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    if (!check) {
      e.persist();
      this._throttledMouseMove(e);
    }
  }
  render() {
    const { mouseXY } = this.state
    return (
      <>
        <HeaderContainer ref="container" onMouseMove={this._onMouseMove}>
          <Snows ref={c => this.canvas = c} />
          <HeaderTop style={{ transform: `scale(1.15) translateX(${mouseXY.x * 0.015}px) translateY(${mouseXY.y * 0.07}px)` }} />
          <HeaderBottom style={{ transform: `scale(1.15) translateX(${mouseXY.x * 0.010}px) translateY(${mouseXY.y * 0.010}px)` }} />
          <Nav>
            <a href="https://www.sympla.com.br/hackabrains-2019---game-of-codes__499575" target="_blank"><Cinzel>INSCRIÇÔES</Cinzel></a>
            <a href="javascript:;"><Cinzel>PATROCINADORES</Cinzel></a>
          </Nav>
          <CinzelTitle><big>G</big>ame of <big>C</big>odes</CinzelTitle><br />
          <Cinzel bold letterSpacing={'10px'}>The winter is here</Cinzel>
        </HeaderContainer>
      </>
    )
  }
}
