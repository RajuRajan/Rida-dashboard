
import tachometer from '../../images/tachometer-alt-solid.svg';
import list from '../../images/list-alt-regular.svg';
import book from '../../images/book-open-solid.svg';
import message from '../../images/message (copy).svg';
import building from '../../images/building (copy).svg';
import file from '../../images/file-alt-regular.svg';
import badge from '../../images/badge (copy).svg';
import edit from '../../images/edit-regular (1) (copy).svg'
import badgeDark from '../../images/badge.svg';
import bus from '../../images/bus-solid.svg';
import user from '../../images/user.svg';
import buildingDark from '../../images/building.svg';
import meal from '../../images/meal.svg'

    const elements = (
        [{
            link_to: "/BGA",
            class_name: "sidenav-picked",
            icon:tachometer,
            name: "BGA"
        },
        {
            link_to:"/MASTERS-LISTS" ,
            class_name: "",
            icon: list,
            name:"MASTERS LISTS"
        },
        {
            link_to:"/AGA" ,
            class_name: "",
            icon:book ,
            name: "AGA"
        },
        {
            link_to:"/AGA-MASTERDATA" ,
            class_name: "",
            icon:message,
            name: "AGA MASTERDATA"
        },

        {
            link_to:"FINANCE" ,
            class_name: "",
            icon:building ,
            name: "FINANCE"
        },
        {
            link_to:"STATISTICS" ,
            class_name: "",
            icon:file ,
            name: "STATISTICS"
        },
        {
            link_to:"HOT-DATES" ,
            class_name: "",
            icon:badge ,
            name:"HOT DATES" 
        },
        {
            link_to: "/empty",
            class_name: "",
            icon:edit ,
            name: "REMARKS"
        }
    ]

    )

    const Terms=(

        [ {
              name:"Print agent T&C"
          },{
              name:"Print holidays/events"
          },
          {
              name:"Print pictures"
          },{
              name:"Itinerary summary"
          },{
              name:"Trade fair list"
          },{
              name:"Parking Fees Included"
          },{
              name:"Driver’s Meal"
          }
      ]
      )

      const accordianData=(
        [{
            classname:"panel-heading even",
            id:"headingOne",
            href:"#collapseOne",
            ariacontrols:"collapseOne",
            icon:badgeDark,
            name:"FOC",
            body:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truckquinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squidsingle-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard ofthem accusamus labore sustainable VHS."
        },{
            classname:"panel-heading",
            id:"headingTwo",
            href:"#collapseTwo",
            ariacontrols:"collapseTwo",
            icon:bus,
            name:"Coaches",
            body:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truckquinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squidsingle-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard ofthem accusamus labore sustainable VHS."
        
        },{
            classname:"panel-heading even",
            id:"headingThree",
            href:"#collapseThree",
            ariacontrols:"collapseThree",
            icon:user,
            name:"Guides",
            body:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truckquinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squidsingle-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard ofthem accusamus labore sustainable VHS."
        
        },{
            classname:"panel-heading",
            id:"headingFour",
            href:"#collapseFour",
            ariacontrols:"collapseFour",
            icon:buildingDark,
            name:"Entrance",
            body:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truckquinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squidsingle-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard ofthem accusamus labore sustainable VHS."
        
        },{
            classname:"panel-heading even",
            id:"headingFive",
            href:"#collapseFive",
            ariacontrols:"collapseFive",
            icon:meal,
            name:"Meals",
            body:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truckquinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squidsingle-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard ofthem accusamus labore sustainable VHS."
        
        },
        ]
    )
    


    export { elements,Terms,accordianData}


