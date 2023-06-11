import React from "react";
import styled from "styled-components";

const Div=styled.div`
    display         : flex;
    width           :${props => props.width      }px;
    height          :${props => props.height     }px;
    flex-direction  :${props => props.direction  };
    justify-content :${props => props.justify    };
    justify-self    :${props => props.justify_s  };
    align-items     :${props => props.align      };
    align-self      :${props => props.align_s    };
    gap             :${props => props.gap        }px;
    margin-top      :${props => props.m_top      }px;
    margin-right    :${props => props.m_right    }px;
    margin-bottom   :${props => props.m_bottom   }px;
    margin-left     :${props => props.m_left     }px;
    position        :${props => props.position   };
    top             :${props => props.top        }px;
    right           :${props => props.right      }px;
    bottom          :${props => props.bottom     }px;
    left            :${props => props.left       }px;
    z-index         :${props => props.zindex     };
    padding-top     :${props => props.p_top      }px;
    padding-right   :${props => props.p_right    }px;
    padding-bottom  :${props => props.p_bottom   }px;
    padding-left    :${props => props.p_left     }px;
`

export default function DivFlex(props){
    const { 
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
     } = props;

    return (
        <Div 
            width       ={width     }
            height      ={height    }
            direction   ={direction }
            justify     ={justify   }
            justify_s   ={justify_s }
            align       ={align     }
            align_s     ={align_s   }
            gap         ={gap       }
            m_top       ={m_top     }
            m_right     ={m_right   }
            m_bottom    ={m_bottom  }
            m_left      ={m_left    }
            position    ={position  }
            top         ={top       }
            right       ={right     }
            bottom      ={bottom    }
            left        ={left      }
            p_top       ={p_top     }
            p_right     ={p_right   }
            p_bottom    ={p_bottom  }
            p_left      ={p_left    }
            zindex      ={zindex    }
        >
            {render}
        </Div>
    )

}