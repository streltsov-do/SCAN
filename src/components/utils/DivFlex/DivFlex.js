import React from "react";
import styled from "styled-components/macro";

const Div=styled.div`
    display         :${props => props.display || "flex"};
    width           :${props => (props.width    ==undefined)?"auto":props.width +"px"};
    height          :${props => (props.height   ==undefined)?"auto":props.height+"px"};
    flex-direction  :${props => props.direction         };
    justify-content :${props => props.justify           };
    justify-self    :${props => props.justify_s         };
    align-items     :${props => props.align             };
    align-self      :${props => props.align_s           };
    gap             :${props => (props.gap      ==undefined)?0:props.gap     +"px"};
    margin-top      :${props => (props.m_top    ==undefined)?0:props.m_top   +"px"};
    margin-right    :${props => (props.m_right  ==undefined)?0:props.m_right +"px"};
    margin-bottom   :${props => (props.m_bottom ==undefined)?0:props.m_bottom+"px"};
    margin-left     :${props => (props.m_left   ==undefined)?0:props.m_left  +"px"};
    position        :${props => props.position          };
    top             :${props => (props.top      ==undefined)?"auto":props.top     +"px"};
    right           :${props => (props.right    ==undefined)?"auto":props.right   +"px"};
    bottom          :${props => (props.bottom   ==undefined)?"auto":props.bottom  +"px"};
    left            :${props => (props.left     ==undefined)?"auto":props.left    +"px"};
    z-index         :${props => props.zindex        || 0};
    padding-top     :${props => (props.p_top    ==undefined)?0:props.p_top   +"px"};
    padding-right   :${props => (props.p_right  ==undefined)?0:props.p_right +"px"};
    padding-bottom  :${props => (props.p_bottom ==undefined)?0:props.p_bottom+"px"};
    padding-left    :${props => (props.p_left   ==undefined)?0:props.p_left  +"px"};
    color           :${props => props.color             };
    border          :${props => props.border            };
    border-radius   :${props => props.border_radius     };
    background      :${props => props.background        };
    background-color:${props => props.background_color  || "none"};
    box-shadow      :${props => props.box_shadow        };
    font-size       :${props => props.f_size            };
    line-height     :${props => props.line_height       };
    letter-spacing  :${props => props.letter_spacing    };
    overflow-x      :${props => props.overflow_x        };
    overflow-y      :${props => props.overflow_y        };
    opacity         :${props => props.opactity          };

    &:hover{
        display     :${props => props.display_hover };
    }
`

export default function DivFlex(props){
    const { 
        display     ,
        render      ,
        width       ,
        height      ,
        direction   ,
        justify     ,
        justify_s   ,
        align       ,
        align_s     ,
        gap         ,
        m_top       ,
        m_right     ,
        m_bottom    ,
        m_left      ,
        position    ,
        top         ,
        right       ,
        bottom      ,
        left        ,
        zindex      ,
        p_top       ,
        p_right     ,
        p_bottom    ,
        p_left      ,
        color       ,
        border      ,
        border_radius   ,
        background      ,
        background_color,
        box_shadow      ,
        f_size          ,
        line_height     ,
        letter_spacing  ,
        overflow_x      ,
        overflow_y      ,
        opacity         ,
        display_hover   ,
     } = props;

    return (
        <Div        
            display         ={display           }
            width           ={width             }
            height          ={height            }
            direction       ={direction         }
            justify         ={justify           }
            justify_s       ={justify_s         }
            align           ={align             }
            align_s         ={align_s           }
            gap             ={gap               }
            m_top           ={m_top             }
            m_right         ={m_right           }
            m_bottom        ={m_bottom          }
            m_left          ={m_left            }
            position        ={position          }
            top             ={top               }
            right           ={right             }
            bottom          ={bottom            }
            left            ={left              }
            p_top           ={p_top             }
            p_right         ={p_right           }
            p_bottom        ={p_bottom          }
            p_left          ={p_left            }
            zindex          ={zindex            }
            color           ={color             }
            border          ={border            }
            border_radius   ={border_radius     }
            background      ={background        }
            background_color={background_color  }
            box_shadow      ={box_shadow        }
            f_size          ={f_size            }
            line_height     ={line_height       }
            letter_spacing  ={letter_spacing    }
            overflow_x      ={overflow_x        }
            overflow_y      ={overflow_y        }
            opacity         ={opacity           }
            display_hover   ={display_hover     }
        >
            {render}
        </Div>
    )

}