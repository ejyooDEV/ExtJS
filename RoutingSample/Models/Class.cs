using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RoutingSample.Models
{
    public class TreeListModel
    {
        /*트리 ID*/
        public String Id { get; set; }

        /*트리에 표시될 이름*/
        public String Name { get; set; }

        /*트리 자식노드 생성 여부*/
        public bool Leaf { get; set; }
    }
}
