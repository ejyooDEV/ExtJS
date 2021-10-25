using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RoutingSample.Models
{
    public class TreeList
    {
        /*트리 ID*/
        public int Id { get; set; }

        /*트리에 표시될 이름*/
        public string Name { get; set; }

        /*트리 자식노드 생성 여부*/
        public bool Leaf { get; set; }

        /*부모 노드 ID*/
        public int ParentId { get; set; }
        
        /*자식 노드*/
        public List<TreeList> Children { get; set; }

        /* clientId (ExtJS만 사용)*/
        public int ClientId { get; set; }

        /* mode */
        public string mode { get; set; }
    }
}
