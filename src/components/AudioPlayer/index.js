import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { hot } from 'react-hot-loader'
import styles from './range.module.scss'

class AudioPlayer extends Component {
    state = {
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
    }

    playPause = () => {
        this.setState({ playing: !this.state.playing })
    }
    setVolume = e => {
        this.setState({ volume: parseFloat(e.target.value) })
    }
    toggleMuted = () => {
        this.setState({ muted: !this.state.muted })
    }
    onPlay = () => {
        console.log('onPlay')
        this.setState({ playing: true })
    }
    onPause = () => {
        console.log('onPause')
        this.setState({ playing: false })
    }
    onSeekMouseDown = e => {
        this.setState({ seeking: true })
    }
    onSeekChange = e => {
        this.setState({ played: parseFloat(e.target.value) })
    }
    onSeekMouseUp = e => {
        this.setState({ seeking: false })
        this.player.seekTo(parseFloat(e.target.value))
    }
    onProgress = state => {
        if (!this.state.seeking) {
            this.setState(state)
        }
    }
    onDuration = (duration) => {
        console.log('onDuration', duration)
        this.setState({ duration })
    }

    render () {
        const { playing, volume, muted, played, loaded } = this.state
    
        return (
          <div className='app'>
            <section className='section'>
              <h4>ReactPlayer Demo</h4>
              <div className='player-wrapper'>
                <ReactPlayer
                  className={styles.Player}
                  width='100%'
                  height='100%'
                  url="https://soundcloud.com/abelhancock/tyrian"
                  playing={playing}
                  volume={volume}
                  muted={muted}
                  onReady={() => console.log('onReady')}
                  onStart={() => console.log('onStart')}
                  onPlay={this.onPlay}
                  onPause={this.onPause}
                  onBuffer={() => console.log('onBuffer')}
                  onSeek={e => console.log('onSeek', e)}
                  onEnded={this.onEnded}
                  onError={e => console.log('onError', e)}
                  onProgress={this.onProgress}
                  onDuration={this.onDuration}
                />
              </div>
    
              <table><tbody>
                <tr>
                  <th>Controls</th>
                  <td>
                    <button onClick={this.playPause}>{playing ? 'Pause' : 'Play'}</button>
                  </td>
                </tr>
                <tr>
                  <th>Seek</th>
                  <td>
                    <input
                      type='range' min={0} max={1} step='any'
                      value={played}
                      onMouseDown={this.onSeekMouseDown}
                      onChange={this.onSeekChange}
                      onMouseUp={this.onSeekMouseUp}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Volume</th>
                  <td>
                    <input type='range' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
                  </td>
                </tr>
                <tr>
                  <th>
                    <label htmlFor='muted'>Muted</label>
                  </th>
                  <td>
                    <input id='muted' type='checkbox' checked={muted} onChange={this.toggleMuted} />
                  </td>
                </tr>
                <tr>
                  <th>Played</th>
                  <td><progress max={1} value={played} /></td>
                </tr>
                <tr>
                  <th>Loaded</th>
                  <td><progress max={1} value={loaded} /></td>
                </tr>
              </tbody></table>
            </section>
          </div>
        )
      }
    }

export default hot(module)(AudioPlayer)