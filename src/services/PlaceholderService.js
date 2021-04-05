import Api from '@/services/Api'

export default{
    getPlaceholders(){
        return Api().get('/?_limit=12')
    }
}